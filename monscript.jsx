//basique

/*let texte = (<div>
    <h1>Test</h1>
    <p>Yo le monde</p>
    </div>)
ReactDOM.render(texte, document.getElementById('app'));*/


//fonction


/*function Welcome(props){
    return( <h1>Bonjour, {props.name}</h1> )
}

ReactDOM.render(
    <Welcome name="Julien" />,
    document.getElementById("app")
);*/

//Classe

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {d:new Date(), inp:"salut"}
    }
    componentDidMount() {
        this.time = setInterval(this.chgDate.bind(this), 500)
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }
    chgDate() {
        this.setState({ d: new Date() })
    }
    chgInp(event) {
        console.log(event.target.value);
        this.setState({ inp: event.target.value })
    }
    clickBtn(){
        this.setState({ aff: !this.state.aff })
    }
    render(){
        return(
            <div>
            <h1>Bonjour, {this.props.name}</h1>
            <p>Il est {this.state.d.toLocaleTimeString()}</p>
            {(this.state.aff==true)?<p>On affiche</p>:""}
            <input type="text" value={this.state.inp} onChange={this.chgInp.bind(this)}/>
            <button onClick={this.clickBtn.bind(this)}>Affiche</button>
            </div>
            );
    }
}

ReactDOM.render(
    <Welcome name="Baptiste" />,
    document.getElementById('app')
);
