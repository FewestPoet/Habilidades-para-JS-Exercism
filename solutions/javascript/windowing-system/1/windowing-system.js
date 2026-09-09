// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80,height=60){
  this.width = width
  this.height = height
}
Size.prototype.resize = function(newWidth,newHeight){
   this.width = newWidth
  this.height = newHeight
}

export function Position(x=0,y=0){
  this.x = x
  this.y = y
}

Position.prototype.move = function(newX,newY){
  this.x = newX
  this.y = newY
}

export function ProgramWindow(screenSize){
this.screenSize = new Size(800,600)
this.size = new Size()
this.position = new Position()
}

ProgramWindow.prototype.resize = function(newSize){
  
    const maxWidth = this.screenSize.width - this.position.x

    if (newSize.width < 1) {
    // mínimo
      this.size.width = 1
} else if (newSize.width > maxWidth) {
    // máximo
      this.size.width = maxWidth
} else {
    // está dentro del rango → usar lo solicitado
      this.size.width = newSize.width
}
  
 
  const maxHeight = this.screenSize.height - this.position.y

  if (newSize.height < 1) {
    // mínimo
    this.size.height = 1
} else if (newSize.height > maxHeight) {
    // máximo
    this.size.height = maxHeight
} else {
    // está dentro del rango → usar lo solicitado
    this.size.height = newSize.height
} 
}

ProgramWindow.prototype.move = function(newPosition){
  
    const maxWidth = this.screenSize.width - this.size.width

    if (newPosition.x < 0) {
    // mínimo
      this.position.x = 0
} else if (newPosition.x > maxWidth) {
    // máximo
      this.position.x = maxWidth
} else {
    // está dentro del rango → usar lo solicitado
      this.position.x = newPosition.x
}
  
  const maxHeight = this.screenSize.height - this.size.height

  if (newPosition.y < 0) {
    // mínimo
    this.position.y = 0
} else if (newPosition.y > maxHeight) {
    // máximo
    this.position.y = maxHeight
} else {
    // está dentro del rango → usar lo solicitado
    this.position.y = newPosition.y
} 
}

export function changeWindow(programWindow){
programWindow.size.width = 400
 programWindow.size.height = 300
  programWindow.position.x = 100
   programWindow.position.y = 150
  return programWindow
}
