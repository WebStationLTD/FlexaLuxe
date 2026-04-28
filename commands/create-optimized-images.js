/**
 * Скрипт за създаване на оптимизирани версии на изображенията
 * за мобилни и десктоп устройства
 *
 * За да използвате:
 * 1. Инсталирайте sharp: npm install sharp
 * 2. Изпълнете: node commands/create-optimized-images.js
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Пътища
const PUBLIC_DIR = path.join(__dirname, "../public");

// Източник: позволява да изберете изображение от командния ред или да използвате изображение по подразбиране
const SOURCE_IMAGE = process.argv[2]
  ? path.join(PUBLIC_DIR, process.argv[2])
  : path.join(PUBLIC_DIR, "source-image.jpg"); // Изходно изображение

// Директни изходи за LCP изображенията
const MOBILE_OUTPUT = path.join(PUBLIC_DIR, "hero-image-mobile.jpg");
const DESKTOP_OUTPUT = path.join(PUBLIC_DIR, "hero-image-desktop.jpg");

// Размери
const MOBILE_WIDTH = 640;
const MOBILE_HEIGHT = 400;
const DESKTOP_WIDTH = 955;
const DESKTOP_HEIGHT = 776;

// Функция за оптимизиране на изображението
async function optimizeImages() {
  // Проверка за източник
  if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error(`Не е намерен файл: ${SOURCE_IMAGE}`);
    console.error(
      `Моля, подайте валидно изображение като аргумент или именувайте вашето изображение като 'source-image.jpg' в public директорията.`
    );
    return;
  }

  console.log(
    `Започва създаване на оптимизирани изображения от: ${SOURCE_IMAGE}`
  );

  try {
    // Създаваме мобилна версия
    await sharp(SOURCE_IMAGE)
      .resize(MOBILE_WIDTH, MOBILE_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toFile(MOBILE_OUTPUT);

    console.log(`✅ Мобилната версия е създадена успешно: ${MOBILE_OUTPUT}`);

    // Създаваме десктоп версия
    await sharp(SOURCE_IMAGE)
      .resize(DESKTOP_WIDTH, DESKTOP_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 85,
        mozjpeg: true,
      })
      .toFile(DESKTOP_OUTPUT);

    console.log(`✅ Десктоп версията е създадена успешно: ${DESKTOP_OUTPUT}`);

    // Проверяваме размерите на файловете
    const mobileSize = (fs.statSync(MOBILE_OUTPUT).size / 1024).toFixed(2);
    const desktopSize = (fs.statSync(DESKTOP_OUTPUT).size / 1024).toFixed(2);

    console.log(`📊 Размер на мобилна версия: ${mobileSize} KB`);
    console.log(`📊 Размер на десктоп версия: ${desktopSize} KB`);

    console.log(`\n🎉 Изображенията са създадени успешно в следните файлове:`);
    console.log(`  - ${MOBILE_OUTPUT} (${mobileSize} KB)`);
    console.log(`  - ${DESKTOP_OUTPUT} (${desktopSize} KB)`);
  } catch (error) {
    console.error("❌ Грешка при оптимизиране на изображенията:", error);
  }
}

// Стартиране на скрипта
optimizeImages();
