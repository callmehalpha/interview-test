<?php

class CourseRepository extends CoreRepository implements CourseRepositoryInterface
{
    public function __construct(\App\Models\Course $course)
    {
        parent::__construct($course);
    }

}
