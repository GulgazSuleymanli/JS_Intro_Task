let students = document.querySelector('.students')
let table = document.createElement('table')

const Students = [
    {
        Name: "Gulgaz",
        Surname: "Suleymanli",
        Age: 20,
        Point: 8
    },

    {
        Name: "Maryam",
        Surname: "Aliyeva",
        Age: 21,
        Point: 100
    },

    {
        Name: "Narmin",
        Surname: "Ibrahimova",
        Age: 20,
        Point: 100
    },

    {
        Name: "Aysu",
        Surname: "Mikayilzada",
        Age: 20,
        Point: 100
    },

    {
        Name: "Qemze",
        Surname: "Mirkisiyeva",
        Age: 20,
        Point: 100
    }
]


const Header = ["Name", "Surname", "Age", "Point"]

let tr = document.createElement('tr')
Header.forEach(element=>{
    let th = document.createElement('th')
    th.innerHTML = element
    tr.appendChild(th)
    table.appendChild(tr)
    students.appendChild(table)
})

Students.forEach(s=>{
    let tr = document.createElement('tr')
    let nametd = document.createElement('td')
    nametd.innerHTML=s.Name
    let surnametd = document.createElement('td')
    surnametd.innerHTML=s.Surname
    let agetd = document.createElement('td')
    agetd.innerHTML=s.Age
    let pointtd = document.createElement('td')
    pointtd.innerHTML=s.Point

    tr.append(nametd,surnametd,agetd,pointtd)
    table.appendChild(tr)
    students.appendChild(table)
})