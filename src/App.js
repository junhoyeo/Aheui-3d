import React from 'react';
import obelisk from 'obelisk.js';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '뱔뿌둬뱺쀠더빠뚜\n터벚봃떠빠뷹붏뼤\n나퍄따쀄븈뵳두받\n붏타볻뚜벓탸볐밢\n떠볽뻐뷦투희맣어'
    }
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');

    const point = new obelisk.Point(300, 250);
    const pixelView = new obelisk.PixelView(canvas, point);

    const dimension = new obelisk.CubeDimension(120, 200, 60);
    const color = new obelisk.CubeColor().getByHorizontalColor(obelisk.ColorPattern.GRAY);

    const cube = new obelisk.Cube(dimension, color);
    pixelView.renderObject(cube);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="editor">
            <canvas
              className="editor__canvas"
              id="canvas"
              width="500"
              height="500"
            />
            <div className="editor__input">
              <textarea
                className="editor__text"
                spellcheck="false"
                autoFocus
                value={this.state.code}
              />
              <div className="editor__btns">
                <button className="editor__btn">
                  시작
                </button>
                <button className="editor__btn">
                  멈춤/재시작
                </button>
                <button className="editor__btn">
                  초기화
                </button>
              </div>
            </div>
          </div>
          <p className="title">
            Aheui editor with 3D visualization
          </p>
        </header>
      </div>
    );
  }
}

export default App;
