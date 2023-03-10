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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOption = void 0;
const typeorm_1 = require("typeorm");
const Question_1 = require("./Question");
const QuestionOptionsHistory_1 = require("./QuestionOptionsHistory");
let QuestionOption = class QuestionOption {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionOption.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionOption.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionOption.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Question_1.Question, (question) => question.question_options),
    (0, typeorm_1.JoinColumn)({ name: "question_id" }),
    __metadata("design:type", Question_1.Question)
], QuestionOption.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QuestionOptionsHistory_1.QuestionOptionHistory, (questionOptionHistory) => questionOptionHistory.questionOption),
    __metadata("design:type", QuestionOptionsHistory_1.QuestionOptionHistory)
], QuestionOption.prototype, "questionOptionHistory", void 0);
QuestionOption = __decorate([
    (0, typeorm_1.Entity)({ name: "question_option" })
], QuestionOption);
exports.QuestionOption = QuestionOption;
