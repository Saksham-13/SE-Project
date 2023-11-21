-- CreateIndex
CREATE INDEX `question_id` ON `Answer`(`question_id`);

-- CreateIndex
CREATE INDEX `skillsId` ON `Exam`(`skillsId`);

-- CreateIndex
CREATE INDEX `exam_id` ON `ExamTrackMapping`(`exam_id`);

-- CreateIndex
CREATE INDEX `track_id` ON `ExamTrackMapping`(`track_id`);

-- CreateIndex
CREATE INDEX `exam_id` ON `Image`(`exam_id`);

-- CreateIndex
CREATE INDEX `question_id` ON `Image`(`question_id`);

-- CreateIndex
CREATE INDEX `exam_id` ON `Question`(`exam_id`);

-- CreateIndex
CREATE INDEX `exam_id` ON `UserExamMapping`(`exam_id`);

-- CreateIndex
CREATE INDEX `user_id` ON `UserExamMapping`(`user_id`);

-- CreateIndex
CREATE INDEX `user_id` ON `UserTrackMapping`(`user_id`);

-- CreateIndex
CREATE INDEX `track_id` ON `UserTrackMapping`(`track_id`);
