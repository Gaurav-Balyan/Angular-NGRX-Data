import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { map, tap, filter, first } from "rxjs/operators";

@Injectable()
export class CourseResolver implements Resolve<boolean> {
  constructor(private coursesService: CourseEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.coursesService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter(loaded => !!loaded),
      first()
    );
  }
}
