/*
  Warnings:

  - You are about to drop the column `nomeEmpresa` on the `lead` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `lead` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` DROP COLUMN `nomeEmpresa`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NULL,
    MODIFY `cnpj` VARCHAR(191) NULL,
    MODIFY `endereco` VARCHAR(191) NULL,
    MODIFY `faixaFaturamento` VARCHAR(191) NULL,
    MODIFY `nomeContato` VARCHAR(191) NULL,
    MODIFY `cargo` VARCHAR(191) NULL,
    MODIFY `mensagem` VARCHAR(191) NULL,
    MODIFY `cidade` VARCHAR(191) NULL,
    MODIFY `estado` VARCHAR(191) NULL;
