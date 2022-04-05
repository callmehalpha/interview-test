<?php

interface CoreRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);

    /**
     * @param $condition , holds the db field
     * @param $query , hold the query value
     * @param $model
     * @return mixed
     */
    public function queryWithACondition($condition, $query, array $with);

    public function show($id, array $with);

    public function findTheFirstOne($condition, $query, array $with);
}
