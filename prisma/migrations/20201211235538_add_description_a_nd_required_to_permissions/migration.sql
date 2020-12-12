/*
  Warnings:

  - Added the required column `description` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `required` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "required" BOOLEAN NOT NULL;
