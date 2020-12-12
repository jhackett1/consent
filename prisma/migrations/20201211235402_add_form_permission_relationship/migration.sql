/*
  Warnings:

  - You are about to drop the column `permissions` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_team_id_fkey";

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "permissions";

-- CreateTable
CREATE TABLE "Permission" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "team_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FormToPermission" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- DropTable
DROP TABLE "Activity";

-- CreateIndex
CREATE UNIQUE INDEX "Permission.name_team_id_unique" ON "Permission"("name", "team_id");

-- CreateIndex
CREATE UNIQUE INDEX "_FormToPermission_AB_unique" ON "_FormToPermission"("A", "B");

-- CreateIndex
CREATE INDEX "_FormToPermission_B_index" ON "_FormToPermission"("B");

-- AddForeignKey
ALTER TABLE "Permission" ADD FOREIGN KEY("team_id")REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToPermission" ADD FOREIGN KEY("A")REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormToPermission" ADD FOREIGN KEY("B")REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
