class Face {
  readonly vertex: number = 3;
  readonly edge: number;
  constructor(edge: number) {
    this.edge = edge;
  }

  public addEdge() {
    this.edge++;
  }
}

const face = new Face(5);
console.log(face.edge);
console.log(face.vertex);
