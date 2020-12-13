-- CreateTable
CREATE TABLE "Participant" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "agreed_to" JSONB NOT NULL,
    "team_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FormToParticipant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant.name_email_phone_team_id_unique" ON "Participant"("name", "email", "phone", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "_FormToParticipant_AB_unique" ON "_FormToParticipant"("A", "B");

-- CreateIndex
CREATE INDEX "_FormToParticipant_B_index" ON "_FormToParticipant"("B");

-- AddForeignKey
ALTER TABLE "Participant" ADD FOREIGN KEY("team_id")REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToParticipant" ADD FOREIGN KEY("A")REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToParticipant" ADD FOREIGN KEY("B")REFERENCES "Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
