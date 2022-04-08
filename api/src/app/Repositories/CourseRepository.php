<?php

namespace App\Repositories;


use App\Interfaces\CourseRepositoryInterface;

class CourseRepository extends CoreRepository implements CourseRepositoryInterface
{
    public function __construct()
    {
        parent::__construct(new \App\Models\Course());
    }

    public function allRaw()
    {
        return $this->model;
    }
}
