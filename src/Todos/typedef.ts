import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  completed: boolean;
}

@InputType()
export class NewTodoInput {
  @Field()
  title: string;
}