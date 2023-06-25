import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { randomUUID } from "crypto";
import { Todo } from "./typedef";

let todoList: Todo[] = [];

@Resolver()
export default class TodoResolver {
  @Query((returns) => [Todo])
  todos(): Todo[] {
    return todoList;
  }

  @Mutation((returns) => Todo)
  addTodo(@Arg("title") title: string): Todo {
    const newTodo: Todo = {
      id: randomUUID(),
      completed: false,
      title,
    };

    todoList.push(newTodo);
    return newTodo;
  }

  @Mutation((returns) => Todo)
  toggleCompleted(@Arg("id") id: string): Todo {
    const todo = todoList.find((item) => item.id === id);
    todo.completed = !todo.completed;
    return todo;
  }

  @Mutation((returns) => Todo)
  deleteTodo(@Arg("id") id: string): Todo {
    const todo = todoList.find((item) => item.id === id);
    const newArray = todoList.filter((item) => item.id !== id);
    todoList = newArray;
    return todo;
  }
}
