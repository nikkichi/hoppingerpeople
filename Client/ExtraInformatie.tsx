import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Immutable from 'immutable'
import * as ViewUtils from './generated_views/view_utils'
import * as List from './containers/list'
import * as Models from './generated_models'
import * as Types from './custom_types'
import * as Api from './api'
import * as Manager from './pageManager'

type ExtrainformatieComponentProps = {onMovePage: (id: Manager.Page) => void,  title: string}
type ExtrainformatieComponentState = { kind: "loading"} 
                                     | {kind:"loaded", Extrainformatie: Types.Extra_Informatie[]}

export class ExtrainformatieComponent extends React.Component<ExtrainformatieComponentProps, ExtrainformatieComponentState>{
    constructor(props, context){
        super(props, context);
        this.state = {kind: 'loading'}
    }

    loadExtraInfo(){
        Api.get_SpecificExtraInformatie(this.props.title)
        .then(ex => this.setState({...this.state, kind:'loaded', Extrainformatie: ex}))
        .catch(ex => console.log('error'))

    }

    componentWillMount(){
        this.loadExtraInfo();

    }

    render(){
        if (this.state.kind == 'loaded'){
            let detail_view = function(details: Types.Extra_Informatie){
                return <div key={details.title}>
                    <h1>{details.title}</h1>
                    <div>{details.text}</div>
                    </div>
            }
                return<div>
                    {this.state.Extrainformatie.map(details => detail_view(details))}
                </div>
        }
        else{
            return <div>Else</div>
        }
    }


}