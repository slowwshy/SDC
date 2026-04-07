/*
  Warnings:

  - Added the required column `id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `score` INTEGER NULL,
    ADD PRIMARY KEY (`id`);
