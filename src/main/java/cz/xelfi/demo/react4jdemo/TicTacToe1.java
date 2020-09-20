/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package cz.xelfi.demo.react4jdemo;

import cz.xelfi.demo.react4jdemo.api.React;
import cz.xelfi.demo.react4jdemo.api.React.Element;
import cz.xelfi.demo.react4jdemo.api.RegisterComponent;
import cz.xelfi.demo.react4jdemo.api.Render;

public class TicTacToe1 {
    private TicTacToe1() {
    }

    @RegisterComponent(name = "TicTacToe1Square")
    static abstract class Square extends React.Component<Square> {
        Square(React.Props props) {
            super(props);
        }

        @Render(
            "<button className='square' onClick='{click}'>{value}</button>"
        )
        protected abstract Element renderSquare(String value, Runnable click);

        @Override
        protected Element render() {
            final String squareValue = "" + this.getProperty("value");
            return renderSquare(squareValue, () -> {
                final String msg = "Clicked " + squareValue;
                System.err.println(msg);
                JsUtils.alert(msg);
            });
        }
    }

    @RegisterComponent(name = "TicTacToe1Board")
    static abstract class Board extends React.Component {
        Board(React.Props props) {
            super(props);
        }

        @Render(
            "<div>" +
            "  <div className='status'>{status}</div>" +
            "  <div className='board-row'>" +
            "    <Square value='0'/>" +
            "    <Square value='1'/>" +
            "    <Square value='2'/>" +
            "  </div>" +
            "  <div className='board-row'>" +
            "    <Square value='3'/>" +
            "    <Square value='4'/>" +
            "    <Square value='5'/>" +
            "  </div>" +
            "  <div className='board-row'>" +
            "    <Square value='6'/>" +
            "    <Square value='7'/>" +
            "    <Square value='8'/>" +
            "  </div>" +
            "</div>"
        )
        protected abstract Element renderBoard(String status);

        @Override
        protected Element render() {
            return renderBoard("Next player: X");
        }
    }

    @RegisterComponent(name = "TicTacToe1Game")
    static abstract class Game extends React.Component {
        Game(React.Props props) {
            super(props);
        }

        @Render(
            "<div className='game'>" +
            "  <div className='game-board'>" +
            "    <Board/>" +
            "  </div>" +
            "  <div className='game-info'>" +
            "    <div></div>" +
            "    <ol></ol>" +
            "  </div>" +
            "</div>"
        )
        @Override
        protected abstract Element render();
    }

    public static void onPageLoad() {
        React.register("Square", TicTacToe1Square::new);
        React.register("Board", TicTacToe1Board::new);
        React.register("Game", TicTacToe1Game::new);
        React.render("Game", "root");
    }

}
