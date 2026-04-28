/**
 * Скрипт за допълнителна оптимизация на LCP изображенията
 * Този скрипт повторно оптимизира LCP изображенията за максимална производителност
 *
 * За да използвате:
 * 1. Първо създайте базовите изображения с create-optimized-images.js
 * 2. След това изпълнете: node commands/optimize-lcp-images.js
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Пътища
const PUBLIC_DIR = path.join(__dirname, "../public");

// LCP изображения, които ще бъдат допълнително оптимизирани
const MOBILE_IMAGE = path.join(PUBLIC_DIR, "hero-image-mobile.jpg");
const DESKTOP_IMAGE = path.join(PUBLIC_DIR, "hero-image-desktop.jpg");

// Временни файлове за процеса на оптимизация
const MOBILE_TEMP = path.join(PUBLIC_DIR, "hero-image-mobile-temp.jpg");
const DESKTOP_TEMP = path.join(PUBLIC_DIR, "hero-image-desktop-temp.jpg");

async function optimizeLCPImages() {
  console.log("Започва допълнителна оптимизация на LCP изображения...");

  try {
    // Мобилно изображение с максимална оптимизация
    if (fs.existsSync(MOBILE_IMAGE)) {
      // Запазваме размерите на оригиналното изображение
      const mobileMetadata = await sharp(MOBILE_IMAGE).metadata();

      // Записваме размера преди оптимизация
      const originalMobileSize = (
        fs.statSync(MOBILE_IMAGE).size / 1024
      ).toFixed(2);

      await sharp(MOBILE_IMAGE)
        .jpeg({
          quality: 60, // По-ниско качество
          mozjpeg: true,
          chromaSubsampling: "4:2:0",
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true,
        })
        .toFile(MOBILE_TEMP);

      // Проверяваме дали супер-компресираната версия е по-малка
      const tempMobileSize = (fs.statSync(MOBILE_TEMP).size / 1024).toFixed(2);

      if (parseFloat(tempMobileSize) < parseFloat(originalMobileSize)) {
        // Заменяме оригиналното изображение с оптимизираното
        fs.unlinkSync(MOBILE_IMAGE);
        fs.renameSync(MOBILE_TEMP, MOBILE_IMAGE);

        console.log(`✅ Мобилно LCP изображение оптимизирано успешно!`);
        console.log(
          `📊 Оригинален размер: ${originalMobileSize} KB, Оптимизиран: ${tempMobileSize} KB`
        );
        console.log(
          `📉 Процент намаление: ${(
            100 -
            (tempMobileSize / originalMobileSize) * 100
          ).toFixed(2)}%`
        );
      } else {
        // Изтриваме временния файл, ако не е по-малък
        fs.unlinkSync(MOBILE_TEMP);
        console.log(
          `ℹ️ Мобилното изображение вече е оптимално сгъстено. Не са направени промени.`
        );
      }
    } else {
      console.warn("⚠️ Не е намерен мобилен файл за оптимизация!");
    }

    // Десктоп изображение с максимална оптимизация
    if (fs.existsSync(DESKTOP_IMAGE)) {
      // Запазваме размерите на оригиналното изображение
      const desktopMetadata = await sharp(DESKTOP_IMAGE).metadata();

      // Записваме размера преди оптимизация
      const originalDesktopSize = (
        fs.statSync(DESKTOP_IMAGE).size / 1024
      ).toFixed(2);

      await sharp(DESKTOP_IMAGE)
        .jpeg({
          quality: 70, // По-добро качество за десктоп
          mozjpeg: true,
          chromaSubsampling: "4:2:0",
          trellisQuantisation: true,
          overshootDeringing: true,
          optimizeScans: true,
        })
        .toFile(DESKTOP_TEMP);

      // Проверяваме дали супер-компресираната версия е по-малка
      const tempDesktopSize = (fs.statSync(DESKTOP_TEMP).size / 1024).toFixed(
        2
      );

      if (parseFloat(tempDesktopSize) < parseFloat(originalDesktopSize)) {
        // Заменяме оригиналното изображение с оптимизираното
        fs.unlinkSync(DESKTOP_IMAGE);
        fs.renameSync(DESKTOP_TEMP, DESKTOP_IMAGE);

        console.log(`✅ Десктоп LCP изображение оптимизирано успешно!`);
        console.log(
          `📊 Оригинален размер: ${originalDesktopSize} KB, Оптимизиран: ${tempDesktopSize} KB`
        );
        console.log(
          `📉 Процент намаление: ${(
            100 -
            (tempDesktopSize / originalDesktopSize) * 100
          ).toFixed(2)}%`
        );
      } else {
        // Изтриваме временния файл, ако не е по-малък
        fs.unlinkSync(DESKTOP_TEMP);
        console.log(
          `ℹ️ Десктоп изображението вече е оптимално сгъстено. Не са направени промени.`
        );
      }
    } else {
      console.warn("⚠️ Не е намерен десктоп файл за оптимизация!");
    }

    console.log("\n🎉 Оптимизацията приключи успешно!");
    console.log("LCP изображенията са оптимизирани и готови за използване:");
    console.log(`  - ${MOBILE_IMAGE}`);
    console.log(`  - ${DESKTOP_IMAGE}`);
  } catch (error) {
    console.error("❌ Грешка при оптимизация на LCP изображения:", error);

    // Почистване на временни файлове при грешка
    if (fs.existsSync(MOBILE_TEMP)) fs.unlinkSync(MOBILE_TEMP);
    if (fs.existsSync(DESKTOP_TEMP)) fs.unlinkSync(DESKTOP_TEMP);
  }
}

// Стартираме оптимизацията
optimizeLCPImages();
