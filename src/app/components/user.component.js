"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../services/post.service");
var UserComponent = (function () {
    function UserComponent(postservice) {
        var _this = this;
        this.postservice = postservice;
        this.name = 'Amit Jain';
        this.email = 'amitjain.0716@gmail.com',
            this.address = {
                street: '11103 Hidden Trail Dr',
                city: 'Owings Mills',
                state: 'MD',
                zip: 21117
            };
        this.hobbies = ['Cricket', 'Movies', 'Clubbing'];
        this.showHobbies = false;
        this.postservice.getPost().subscribe(function (post) {
            _this.post = post;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
        providers: [post_service_1.Postservice]
    }),
    __metadata("design:paramtypes", [post_service_1.Postservice])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map