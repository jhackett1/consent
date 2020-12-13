/*
  Warnings:

  - You are about to drop the column `agreed_to` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the `_FormToParticipant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FormToParticipant" DROP CONSTRAINT "_FormToParticipant_A_fkey";

-- DropForeignKey
ALTER TABLE "_FormToParticipant" DROP CONSTRAINT "_FormToParticipant_B_fkey";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "agreed_to";

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "form_id" INTEGER NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "formId" INTEGER,
    "participantId" INTEGER,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "_FormToParticipant";

-- AddForeignKey
ALTER TABLE "Response" ADD FOREIGN KEY("form_id")REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD FOREIGN KEY("participant_id")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD FOREIGN KEY("formId")REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD FOREIGN KEY("participantId")REFERENCES "Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
