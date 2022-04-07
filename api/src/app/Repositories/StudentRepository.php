<?php


namespace App\Repositories;


use App\Interfaces\StudentRepositoryInterface;
use App\Models\Student;

class StudentRepository extends CoreRepository implements StudentRepositoryInterface
{
    public function __construct()
    {
        parent::__construct(new Student());
    }

    public function allRaw()
    {
        return $this->model;
    }
}
