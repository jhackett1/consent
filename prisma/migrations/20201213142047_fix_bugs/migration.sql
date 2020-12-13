/*
  Warnings:

  - You are about to drop the column `formId` on the `Response` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_formId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_form_id_fkey";

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "formId";

-- AddForeignKey
ALTER TABLE "Response" ADD FOREIGN KEY("form_id")REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
