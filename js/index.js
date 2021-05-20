

    // console.log()

// function Test( title, name, age=10) {
//     console.log('my name is ', title, )
//     console.log('my status is ', name, )
//     console.log('my age is ', age, )

// }


// const Test = function (title, name, age=10) {
//     console.log('my name is ', title, )
//     console.log('my status is ', name, )
//     console.log('my age is ', age, )
// }

// console.log(Test())

// const Test = (title, name, age = 10) => {
//     console.log('my name is ', title, )
//     console.log('my status is ', name, )
//     console.log('my age is ', age, )
// }
// Test('Sardor', "Student", 50)




// class Student {
//     constructor(id, name) {
//         this.id = id
//         this.name = name
//     }
//     getStudent() {
//         console.log('student',this.id, this.name)
//     }
// }

// class Teacher extends Student{
//     constructor(id, name) {
//         super(id, name);
//         this.id = id;
//         this.name = name
//     }
//     getTeacher() {
//         console.log('teacher', this.id, this.name)
//     }
// }

// const t1 = new Teacher(1234, 'IT')

// t1.getTeacher()
// t1.getStudent()


// function Rec(a, b) {
//   if (b - a === 2) {
//     return [a + 1];
//   } 
//   else {
//     var list = Rec(a, b - 1);
//     list.push(b - 1);
//     return list;
//   }
// };

// console.log(Rec(2,9));

// var ar = ['a', 'b', 'c']

// // value
// for (let i of ar){
//     console.log(i)
// }

// // index
// for (let i in ar){
//     console.log(i)
// }

// obj = {name: "Sardor", title: 'Student'}
// // obj => key
// for (let i in obj){
//     console.log(obj[i])
// }

 const data = [
    {
      id: 1,
      img: 'https://i.ytimg.com/vi/wbTwdNonPRo/maxresdefault.jpg',
      title: 'Vintage Typewriter to post awesome stories about UI design and webdev.,',
      cost: '11 000 000 sum',
      location: 'Baliqchi, Andijan',
      date: 'Today 20:25'
    },
    {
        id: 2,
        img:'https://images.sportsdirect.com/images/products/60303703_l.jpg',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '12 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 3,
        img: 'https://sc04.alicdn.com/kf/H6a187c127a10476c83bfb7b1d8f78027B.png',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '13 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 4,
        img: 'https://rozetked.me/images/uploads/3BUlPBYV8p6t.jpg',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '14 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 5,
        img: 'https://i.ytimg.com/vi/wbTwdNonPRo/maxresdefault.jpg',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '15 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 6,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f70fab5aa2134391b7d2a95b00a2d5e7_9366/Linear_Core_Organizer_Bag_Black_DT4822_01_standard.jpg',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '16 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 7,
        img: 'http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '17 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      },
      {
        id: 8,
        img: 'https://cdnimg.rg.ru/img/content/188/66/92/cadillac_escalade_11_d_850.jpeg',
        title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
        cost: '18 000 000 sum',
        location: 'Baliqchi, Andijan',
        date: 'Today 20:25'
      }
      
]



var mapdata = data.map((index, id) => {
    // console.log(index.cost)
    return index.id
})

// for (let value of data) {
//     console.log(value.id)
// }

data.forEach((index, id) => {
    // console.log(index.cost)

})
console.log(mapdata)


