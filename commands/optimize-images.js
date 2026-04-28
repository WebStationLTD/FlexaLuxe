/**
 * Единен скрипт за оптимизация на изображения
 * Този скрипт създава оптимизирани мобилни и десктоп версии на изображение
 *
 * За да използвате:
 * 1. Поставете изходното изображение в public директорията
 * 2. Изпълнете: node commands/optimize-images.js вашето-изображение.jpg
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Пътища
const PUBLIC_DIR = path.join(__dirname, "../public");

// Парсираме аргументите от командния ред
const sourceFileName = process.argv[2]; // Например: my-image.jpg
if (!sourceFileName) {
  console.error(
    "Моля, задайте име на изходно изображение! Пример: node commands/optimize-images.js my-image.jpg"
  );
  process.exit(1);
}

const SOURCE_PATH = path.join(PUBLIC_DIR, sourceFileName);
if (!fs.existsSync(SOURCE_PATH)) {
  console.error(
    `Изображението ${sourceFileName} не съществува в public директорията!`
  );
  process.exit(1);
}

// Конфигурация
const MOBILE_WIDTH = 640;
const MOBILE_HEIGHT = 400;
const DESKTOP_WIDTH = 955;
const DESKTOP_HEIGHT = 776;

// Изходни файлове (извлечени от източника)
const fileNameWithoutExt = path.basename(
  sourceFileName,
  path.extname(sourceFileName)
);
const MOBILE_OUTPUT = path.join(PUBLIC_DIR, `${fileNameWithoutExt}-mobile.jpg`);
const DESKTOP_OUTPUT = path.join(
  PUBLIC_DIR,
  `${fileNameWithoutExt}-desktop.jpg`
);

// Също генерираме LCP оптимизирани версии
const MOBILE_LCP = path.join(PUBLIC_DIR, "hero-image-mobile.jpg");
const DESKTOP_LCP = path.join(PUBLIC_DIR, "hero-image-desktop.jpg");

/**
 * Функция за оптимизиране на изображенията
 */
async function optimizeImages() {
  console.log(`Започва оптимизация на изображение: ${sourceFileName}`);

  try {
    // ------------------- МОБИЛНА ВЕРСИЯ -------------------
    console.log("\n📱 Създаване на мобилна версия...");

    // Обикновена мобилна версия
    await sharp(SOURCE_PATH)
      .resize(MOBILE_WIDTH, MOBILE_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 80,
        mozjpeg: true,
      })
      .toFile(MOBILE_OUTPUT);

    const mobileSize = (fs.statSync(MOBILE_OUTPUT).size / 1024).toFixed(2);
    console.log(`  ✓ Създадена: ${MOBILE_OUTPUT} (${mobileSize} KB)`);

    // LCP мобилна версия (супер оптимизирана)
    await sharp(MOBILE_OUTPUT)
      .jpeg({
        quality: 65,
        mozjpeg: true,
        chromaSubsampling: "4:2:0",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(MOBILE_LCP);

    const mobileLcpSize = (fs.statSync(MOBILE_LCP).size / 1024).toFixed(2);
    console.log(
      `  ✓ LCP версия: ${MOBILE_LCP} (${mobileLcpSize} KB, ${(
        100 -
        (mobileLcpSize / mobileSize) * 100
      ).toFixed(0)}% по-малка)`
    );

    // ------------------- ДЕСКТОП ВЕРСИЯ -------------------
    console.log("\n🖥️ Създаване на десктоп версия...");

    // Обикновена десктоп версия
    await sharp(SOURCE_PATH)
      .resize(DESKTOP_WIDTH, DESKTOP_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 85,
        mozjpeg: true,
      })
      .toFile(DESKTOP_OUTPUT);

    const desktopSize = (fs.statSync(DESKTOP_OUTPUT).size / 1024).toFixed(2);
    console.log(`  ✓ Създадена: ${DESKTOP_OUTPUT} (${desktopSize} KB)`);

    // LCP десктоп версия (супер оптимизирана)
    await sharp(DESKTOP_OUTPUT)
      .jpeg({
        quality: 75,
        mozjpeg: true,
        chromaSubsampling: "4:2:0",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(DESKTOP_LCP);

    const desktopLcpSize = (fs.statSync(DESKTOP_LCP).size / 1024).toFixed(2);
    console.log(
      `  ✓ LCP версия: ${DESKTOP_LCP} (${desktopLcpSize} KB, ${(
        100 -
        (desktopLcpSize / desktopSize) * 100
      ).toFixed(0)}% по-малка)`
    );

    // ------------------- ОБОБЩЕНИЕ -------------------
    console.log("\n✅ Всички изображения са оптимизирани успешно!");
    console.log("\n📋 Обобщение:");
    console.log(`  - Мобилна версия: ${MOBILE_OUTPUT} (${mobileSize} KB)`);
    console.log(`  - Десктоп версия: ${DESKTOP_OUTPUT} (${desktopSize} KB)`);
    console.log(`  - LCP Мобилна: ${MOBILE_LCP} (${mobileLcpSize} KB)`);
    console.log(`  - LCP Десктоп: ${DESKTOP_LCP} (${desktopLcpSize} KB)`);

    console.log("\n📝 ВАЖНО: LCP изображенията са записани като:");
    console.log(`  - /hero-image-mobile.jpg (за мобилни устройства)`);
    console.log(`  - /hero-image-desktop.jpg (за десктоп устройства)`);
    console.log(
      "  Те вече са конфигурирани в приложението и готови за използване."
    );
  } catch (error) {
    console.error("❌ Грешка при оптимизиране:", error);
  }
}

// Стартиране на скрипта
optimizeImages();
