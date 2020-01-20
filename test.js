type UNIQID = string | null

function getUserID(id: UNIQID) {
  console.log(id)
}

getUserID('asdfjasdoif')
getUserID(null)
getUserID(12)