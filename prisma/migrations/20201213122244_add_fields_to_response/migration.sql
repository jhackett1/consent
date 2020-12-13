/*
  Warnings:

  - Added the required column `updated_at` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agreed_to` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "agreed_to" JSONB NOT NULL;
