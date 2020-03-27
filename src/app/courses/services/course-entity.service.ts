import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase
} from "@ngrx/data";
import { Course } from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Course", serviceElementsFactory);
  }
}
