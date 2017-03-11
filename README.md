# Learn Angular 2

# LINKS
- https://angular.io/
- https://github.com/angular/angular-cli

# PLUGINS
## DEV
- **TRANSPILER TYPESCRIPT**
```shell
npm install typescript --save-dev
```

# MODULES
- **CREATE** | Necessary import **DECORATOR**
  - **imports** _IMPORT_ **MODULES**
  - **declarations** _import_ **COMPONENTS**
  - **bootstrap** _import_ the **INITIAL** **COMPONENTS**
  - **exports** _export_ _enable_ what all use.
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  exports: [ AppComponent ]
})
export class ModuleName{

}
```



# COMPONENTS
- **CREATE** | Necessary import **DECORATOR**
  - **selector** create tagName <componentName></componentName>
  - **templateUrl**
  - **moduleId** _enable_ _RELATIVE PATH_ for tempalteUrl
  - **styleUrls** css for **component**
```javascript
import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',
  styleUrls: []

})
export class ComponentName{}
```
- **ADDED PROPERTIES** | _import_ **input**
  - **Input** received information
  - **Output** send events
  - **EventEmitter** _trigger_ events
```javascript
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',

})
export class ComponentName{
  @Input() attr1;
  @Input() attr2;
  @Output() action;
}
```
- **ONE WAY DATABIND** **MODEL** TO **VIEW** _Use_ **[]**=**propertie**
```javascript
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app/app.component.html',

})
export class ComponentName{
  @Input() attr1;
  @Input() attr2;
}
```
> Wrong

```html
<componentName [src]="{{att1}}" [alt]="{{attr2}}"></componentName>
```

> Correct

```html
<componentName [src]="att1" [alt]="attr2"></componentName>
<!-- OR-->
<componentName src="{{att1}}" alt="{{attr2}}"></componentName>
```
- **ONE WAY DATABIND** **VIEW** TO **MODEL** _Use_ **[]**=**$event.target.value**
  - **use NGMODEL**
```html
<input type="text" (input)="objectName = $event.target.value" />

<!-- or -->

<input type="text" [(ngModel)]="objectName" />
```

- **TWO WAY DATABIND**
 - Use **[()]**
 ```html
 <input type="text" name="objectName" [(ngModel)]="objectName" />
 ```

- **EVENT BIND** in **VIEW** to **MODEL** | Use **()**
  - **$event** | Event
```html
<input type="text" (keyup)="functionName($event)" />
```
- **CREATING LOCAL VARIABLE** | Use **#** varName OU **var-**varName**
```html
<input #localVariableName type="text" />
<input var-localVariableName type="text" />
```

## LIFECYCLE
- **constructor**
- **ngOnInit** | run after inbound properties received value

# STEPS
- **Run** _transpiler_ watch
- **Create** the **COMPONENT MAIN**
- **Create** the **MODULE MAIN**
- **Create** file **main.ts**
    - **LOAD** the initial **MODULE**
```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```


# SERVICES
## CUSTOM SERVICES
- **CREATE** | permitted inject **angular service** example : _http_
```javascript
import {  Injectable } from '@angular/core';
@Injectable()
export class MyService{}
```
- To **export** the custom services in **providers**
```javascript
@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ],
  providers: [customService]
});

```

## ANGULAR CORE
- **HTTP** | call ajax requests
```javascript
// COMPONENT
import { Http } from '@angular/http';

// MODULE PROVIDER
import { HttpModule } from '@angular/http';
```
- **HTTP HEADER** | COnfig header to http
```javascript
// COMPONENT
import { Headers } from '@angular/http';

const headers = new Headers();

// add header value
headers.append('Name', 'value');
```

- **CREATE ROUTES**
  - **routes** | This is _array_
  - **RouterModule** | _Compile_ routes
  - **path** | Url part
  - **component** | _Component_ will load
  - **redirect** to specific **router**
> Import in object **imports** in **NgModule** _decorator_

```javascript
import { RouterModule, Routes} from '@angular/router';

// DEFINE ROUTES
const appRoutes: Routes = [
  { path: '', component: ComponentName},
  { path: 'register', component: ComponentName},

  // DEFINE PARAM
{ path: 'register/:paramName', component: ComponentName},

  // Equal 404 ROUTE
  { path: '**', component: ComponentName},
  // or
  { path: '**', redirectTo: 'routerPath'},
];

// GENERATE ROUTES
export const routing = RouterModule.forRoot(appRoutes);
```
> IMPORTANT: ADDED in **index.html** this code:

```html
<base href="/">
```
- **GET PARAMS ROUTE**
```javascript
import { ActivatedRoute } from '@angular/router';

route.params.subscribe(params => params['paramName']);
```

- **REDIRECT IN COMPONENT**
```javascript
import { roUTER, } from '@angular/router';

router.navigate(['routeName']);
```

# DEPENDENCY INJECTION
- **Init**
```javascript
// COMPONENT
import { Inject } from '@angular/core';
```
- **DECORATOR**
```javascript
constructor(@Inject(Service) nameService){}
// OR
constructor(nameService : TypeService){}
```

# DIRECTIVES
- **NGFOR** | use _*_
```html
<photo *ngFor="let photo of photos" src="{{photo.att1}}" alt="{{photo.attr2}}" ></photo>
```
- **NGIF** | use _*_
```html
<photo *ngIf="condition"></photo>
```
- **NG-CONTENT** | Added **child** value in component
```html
<panel>
  <child></child>
</panel>
```
- **router-outlet** | Added **component** **ROUTER** DEFINED
```html
<router-outlet></router-outlet>
```
- **routerLink** | Link pages, dont use _href_
```html
<a [routerLink] = "['/routerName']" >Link</a>
```
- **ngModel***
  - **name** is **required**
  - _IMPORT_ **FormsModule**
```javascript
import { FormsModule } from '@angular/forms';
```
```html
<input type="text" name="objectName" [(ngModel)]="objectName" />
```
- **DISABLED**
```html
<button [disabled]="localVariableName.invalid" >Save</button>
```
- **FORMGROUP** | Used to _validation_ fields in **MODEL**
  - **formControlName** | Is **REQUIRED**
```html
<form [formGroup]="modelFormGroupName" formControlName>
</form>
```



## FILTERS
- **UPPERCASE**
```html
<photo title="{{value | uppercase}}"></photo>
```
- **CREATING FILTERS**
  - **input.value** | GET element VALUE
```html
<photo *ngFor="let photo of photos | varName: filterInput.value" src="{{photo.att1}}" alt="{{photo.attr2}}" ></photo>
```

## PIPES
- **CREATING FILTERS** | added filters in **declarations** and **exports**
  - **name** | Name the your **filter**
  **transforma** | REQUIRED FUNCTION named **transform**
```javascript
import { Pipe } from '@angular/core';
@Pipe({
  name: 'filterName'
})
export class FilterName{
  transform(param1, param2){

  }
}
```

## VALIDATION FORMS
### TEMPLATE
- **invalid** | Check validation is ok
```html
<input type="text" name="objectName" [(ngModel)]="objectName" #localVariableName="ngModel" />
<span *ngIf="localVariableName.invalid" >Error</span>
```

```html
<form #localVariableName="ngForm" >
<button [disabled]="localVariableName.invalid" >Save</button>
</form>
```

### MODEL
- **validator** to _access_ in **VIEW** use **.controls**:
  - **validator.compose()** | Any **validator** more that one **validator**
```html
<!--  Show to all validators -->
<span *ngIf='formName.controls.objectName.invalid' >Error</span>

<!--  Show to specific validator -->
<span *ngIf='formName.controls.objectName.errors.required' >Error</span>
```
```javascript
// Added in MODULE
import { ReactiveFormsModule } from '@angular/forms';

// Added in component
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

```

# RxJS
- Return **observable stream**
- Angular 2 dont use **promisses**
- **GET DATA**
  - **res** this is _RESPONSE_
    - **.json()** _format_
    - **.text()** _format_
```javascript
stream.subscribe(res => {
  console.log(res.json());
}, error => {})
```
- **ENABLE MAP** function
```javascript
import 'rxjs/add/operator/map';
```

# TRANSPILER
- **Transform** _typescript_ in **javascript**

# SHADOW DOM
- **INIT**
  - **Emulated** id _default_
```javascript
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    encapsulation: "ViewEncapsulation.Emulated | ViewEncapsulation.NONE | ViewEncapsulation.Native"
  })
```

# JQUERY and ANGULAR2
> **NEVER** _use_, buuuuuuuuuuuuuuuuuuuuut case you want.

- **INSTALL TYPINGS**
  - **TYPINGS** permitte added **$** **GLOBAL**
```shell
node .node_modules/typings/dist/bin install dt~jquery --global --save
```
- **IMPORT** **BEFORE** _angular_ files
- **ACCESS** your **dom componeent**, use **elementref**
```javascript
import { Component, ElementRef } from '@angular/core';
@Component({

})
export class ComponentName{
  constructor(element: ElementRef){}

  event(callback){
    $(this.element.nativeElement).fadeOut(callback);
  }

}
```

# ANGULAR CLI
- **INSTALL**
```shell
npm install -g angular-cli@1.0.0-beta.19-3
```
- **CREATE PROJECT**
```shell
ng new projectName
```
- **SERVER**
```shell
ng serve
ng serve --prod // PRODUTION
```
- **CREATE COMPONENT**
```shell
ng g component name
```
- **CREATE MODULE** | **MODULE** DOESNT _AUTOMATIC IMPORT_ IN **app.module**
```shell
ng g module name
```
- **BUILD**
```shell
ng build --prod
```

# OBSERVATIONS
- In 21/02/17 **javascript** don't support to **DECORATOR**, but **typescript** have support
- **in DEVElOPMENT** is _required_ the **auto transpiler**
 - To **IMPORT** **ANGULAR2** use **systemjs**
  - **import** script in _html_
- **ATTENTION** for **EXPORT** ecma6 **classes**
- **DONT USE ;**

> ERROR

```javascript
@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ]
});
```
> Correct

```javascript
@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ]
})
```
- **DONT USE HREF in routes** use
```html
[routerLink]="['/routerName']"
```
- **ROUTES**
  - _Define_ the **router** for **last**
- **ONLY** **EVENTS ASYNC** **render** the **dom**
```html
<input type="text" (keyup)="" />
```
- **FORMGROUP**
   - **added** ALL INPUTS IN **FORMGROUP**
