<?php

class CoreRepository implements CoreRepositoryInterface
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function all()
    {
        // TODO: Implement all() method.
        return $this->model::all();
    }

    public function create(array $data)
    {
        // TODO: Implement create() method.
        return $this->model::create($data);
    }

    public function update($id, array $data)
    {
        // TODO: Implement update() method.
        return $this->model::where('id', $id)->update($data);
    }

    public function delete($id)
    {
        // TODO: Implement delete() method.
        return $this->model::where('id', $id)->delete();
    }

    /**
     * @param $condition , holds the db field
     * @param $query , hold the query value
     * @param $model
     * @return mixed
     */
    public function queryWithACondition($condition, $query, array $with)
    {
        return $this->model::with($with)->where($condition, $query)->simplePaginate(25);
    }

    public function show($id, array $with)
    {
        // TODO: Implement show() method.
        return $this->model::with($with)->where('id', $id)->get();
    }

    public function findTheFirstOne($condition, $query, array $with)
    {
        return $this->model::with($with)->where($condition, $query)->first();
    }



}
