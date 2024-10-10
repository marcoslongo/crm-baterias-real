/*
  Warnings:

  - You are about to drop the column `estado` on the `representante` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `representante` DROP COLUMN `estado`,
    ADD COLUMN `estadoId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Estado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sigla` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Estado_sigla_key`(`sigla`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
