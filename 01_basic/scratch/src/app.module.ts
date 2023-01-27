// Every application we create needs to have one module in it

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
    // when nest starts it is going to look at all the controller here and create 
    // instances of those and wire
    controllers: [AppController]
})
export class AppModule {

}