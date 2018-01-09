import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//learning class more
class Student{
    constructor(info){
        this.name = info.name;
        this.course = info.course;
    }
    getCourse(){
        return this.course;
    }
    showName(){
        console.log(`Student is: ${this.name}`);
    }
    static getFull(){
        console.log("Full info");
    }
};

let People =  function () {
    function People(info){
        this.name = info.name;
        this.gender = info.gender;
    }
    
    Object.defineProperty(People.prototype,'showName', {
        key: 'showName',
        value: function (){
            console.log(`Name is: ${this.name}`);
        }
    })

    Object.defineProperty(People.prototype,'getGender', {
        key: 'getGender',
        value: function (){
            return this.gender;
        }
    })

    Object.defineProperty(People,'getFull',{
        value: 'getFull',
        value: ()=>{
            console.log('just simulate static method');
        }
    });

    return People;
}();

//let s = new Student({name: 'Linh', course: 'JS'});
//s.showName();


// let p = new People({name: "ABC", gender: "Male"});
// var gender = p.getGender();
// console.log(`Gender is: ${gender}`);
People.getFull();
Student.getFull();
//p.showName();
//console.log(`Name is: ${p.name}`);