/*
  Warnings:

  - Added the required column `permissions` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "permissions" JSONB NOT NULL;
