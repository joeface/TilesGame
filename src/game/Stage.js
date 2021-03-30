import React from 'react';
import Board  from './Board';


const stages = {
    0: {
        title: 'Начало начал',
        tiles: null,
        button: 'Начать',
        progress: null
    },
    1: {
        title: 'Выбери героя',
        tiles: [
            'Вариант 1.1',
            'Вариант 1.2',
            'Вариант 1.3'
        ],
        button: 'Дальще',
        progress: null
    },
    2: {
        title: 'Место преступления',
        tiles: [
            'Item 2.1',
            'Item 2.2',
            'Item 2.3'
        ],
        button: 'Вперед',
        progress: null
    },
    3: {
        title: 'Что произошло?',
        tiles: [
            'Вариант 3.1',
            'Вариант 3.2',
            'Вариант 3.3',
            'Вариант 3.4',
            'Вариант 3.5',
            'Вариант 3.6',
        ],
        button: 'Го',
        progress: null
    },
    4: {
        title: 'Подтвердить выбор',
        tiles: [
            'Вариант 1.2',
            'Item 2.1',
            'Вариант 3.4',
        ],
        button: 'Подтвердить',
        progress: null
    },
    5: {
        title: 'Ваш результат',
        tiles: null,
        button: 'Еще раз',
        progress: null
    }
}

class Stage extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            stage: 0,
            title: 'Stage',
            stageObject: null
        }
    }

    getStageData(stage){
        
        if(stage in stages) {
            return stages[stage];
        } else {
            return null;
        }
    }

    nextStage(){

        var stage = this.state.stage + 1;
        if(stage === 5){
            stage = 0;
        }

        this.setState({stage: stage, stageObject: this.getStageData(stage)});

    }


    previousStage(){

        var stage = this.state.stage - 1;
        if(stage < 0){
            stage = 0;
        }

        this.setState({stage: stage, stageObject: this.getStageData(stage)});

    }

    render(){

        const stage = this.getStageData(this.state.stage);
        
        return ( stage ? 
            <div className="game">
                {this.state.stage > 0 && this.state.stage < 5 ? <button className="back" onClick={() => this.previousStage()}></button> : '' }
                <h2 className="title">{stage.title}</h2>
                <Board 
                    key={'stage-'+this.state.stage}
                    stage={this.state.stage}
                    tiles={stage.tiles} 
                />
                { 
                stage.button ? 
                    <div className="container-button">
                        <button 
                            className="button" 
                            onClick={() => this.nextStage()}
                        >
                        {stage.button}
                        </button>
                    </div> : 
                    '' 
                    }
                <div className="progress">{stage.progress}</div>
            </div>
        : 'No Stage Found' );
    }

}

export default Stage;