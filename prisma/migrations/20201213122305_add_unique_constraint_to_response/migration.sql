/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[form_id,participant_id]` on the table `Response`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Response.form_id_participant_id_unique" ON "Response"("form_id", "participant_id");
