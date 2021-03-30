import React from 'react';

class Tile extends React.Component {
    
    render(){
        const tileClassName = 'tile' + (this.props.isSelected ? ' selected' : '');

        return (
            <div 
                className={tileClassName}
                onClick={(i) => this.props.onClick(i)}
            >
                {this.props.title}
            </div>
        )
    }
}

class Board extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            selected: null
        };

    }

    selectTile(key){
        console.log('Select', key)
        this.setState({selected: key});
    }

    render(){

        const tiles = this.props.tiles ? this.props.tiles.map((title, step) => {

            return (
                <Tile 
                    key={'stage-'+this.props.stage +'-item-' + step}
                    title={title}
                    isSelected={this.state.selected === step}
                    onClick={() => this.selectTile(step)}
                /> 
            )
        }) : 'No Tiles for Stage';

        return (
            <div className="board">
                { tiles }
            </div>
        );
    }

}

export default Board;