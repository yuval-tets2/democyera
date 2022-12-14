/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScanWhereInput } from "./ScanWhereInput";
import { Type } from "class-transformer";
import { ScanOrderByInput } from "./ScanOrderByInput";

@ArgsType()
class ScanFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScanWhereInput,
  })
  @Field(() => ScanWhereInput, { nullable: true })
  @Type(() => ScanWhereInput)
  where?: ScanWhereInput;

  @ApiProperty({
    required: false,
    type: [ScanOrderByInput],
  })
  @Field(() => [ScanOrderByInput], { nullable: true })
  @Type(() => ScanOrderByInput)
  orderBy?: Array<ScanOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ScanFindManyArgs };
