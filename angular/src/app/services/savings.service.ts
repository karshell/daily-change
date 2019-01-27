import { Injectable, OnInit } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable({
    providedIn: 'root'
})

export class SavingsService implements OnInit {
    constructor(/*private sqlite: SQLite*/){ }

    ngOnInit(): void {
        /*this.sqlite.create({
            name: 'littlepiggy.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS SavingsSettings(rowid INTEGER PRIMARY KEY, target INT, currency TEXT, targetDate DATE )')
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
        })*/
    }

    public GetSavings(): Saving[] {
        let savings = [
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date())
        ];

        return savings;
    }
}

export class Saving {
    constructor(
        public Name: string,
        public Category: string,
        public Amount: number,
        public Date: Date
    ) { }
}