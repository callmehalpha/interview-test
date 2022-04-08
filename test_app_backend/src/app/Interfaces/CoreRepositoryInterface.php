<?php

namespace App\Interfaces;

interface CoreRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);

    public function queryWithACondition($condition, $query, array $with);

    public function show($id, array $with);

    public function findTheFirstOne($condition, $query, array $with);
}
