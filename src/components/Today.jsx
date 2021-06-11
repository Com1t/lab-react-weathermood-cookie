import React from 'react';
import PropTypes from 'prop-types';

import WeatherDisplay from 'components/WeatherDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import {getWeather} from 'api/open-weather-map.js';
import {getUser, signIn, logIn, modifyUser} from 'api/toBack.js';
import {addLine, modifyLine, getLine, setMainLine} from 'api/toBackLine.js';
import {addNode} from 'api/toBackNode.js';

import './weather.css';

var qs = require('qs');

export default class Today extends React.Component {
    static propTypes = {
        masking: PropTypes.bool,
        group: PropTypes.string,
        description: PropTypes.string,
        temp: PropTypes.number,
        unit: PropTypes.string
    };

    static getInitWeatherState() {
        return {
            city: 'na',
            code: -1,
            group: 'na',
            description: 'N/A',
            temp: NaN
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            ...Today.getInitWeatherState(),
            loading: true,
            masking: true
        };

        this.handleFormQuery = this.handleFormQuery.bind(this);
    }

    componentDidMount() {
        this.getWeather('Hsinchu', 'metric');
    }

    componentWillUnmount() {
        if (this.state.loading) {
            cancelWeather();
        }
    }
    // TODO
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            unit: nextProps.unit
        }, ()=>{this.getWeather(nextProps.city, nextProps.unit)});
    }

    render() {
        return (
            <div className={`today weather-bg ${this.state.group}`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <WeatherDisplay {...this.state}/>
                    <WeatherForm city={this.state.city} unit={this.props.unit} onQuery={this.handleFormQuery}/>
                </div>
            </div>
        );
    }

    getWeather(city, unit) {
        this.setState({
            loading: true,
            masking: true,
            city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
        }, () => { // called back after setState completes
            console.log(city, unit)
            // signIn
            // var data = qs.stringify({
            //     'account': 'orange',
            //     'email': 'orange@orange.com',
            //     'name': 'orange',
            //     'avatar_url': 'IIIIII',
            //     'password': 'orange' 
            //   });
            // signIn(data).then(weather => {
            //     console.log(weather);
            // }).catch(err => {
            //     console.error('Error while signIn', err);
            // });

            // logIn
            // var data = qs.stringify({
                // 'account': 'apple',
                // 'password': 'banana' 
              // });
            // logIn(data).then(weather => {
                // console.log(weather);
            // }).catch(err => {
                // console.error('Error while logIn', err);
            // });

            // getUser
            // getUser('60add67a7ce322492421408e').then(weather => {
            //     console.log(weather);
            // }).catch(err => {
            //     console.error('Error while getUser', err);
            // });

            // modifyUser
            // modify anyone down below as you need
            // var data = qs.stringify({
            //     // 'account': 'orange',
            //     // 'email': 'orange@orange.com',
            //     'name': 'pine',
            //     // 'avatar_url': 'IIIIII',
            //     // 'password': 'orange' 
            //   });
            // modifyUser('60bcc9b4e58b6711c46c8d5b',data).then(weather => {
            //     console.log(weather);
            // }).catch(err => {
            //     console.error('Error while signIn', err);
            // });
			
            // addLine
			/* data should like this */
			// var data = qs.stringify({
			  // 'owner': '60add554ec270526baeaa1d1',
			  // 'sharer': '60af952cb4eaca677002e1a2',
			  // 'url': '',
			  // 'title': 'TASK',
			  // 'content': 'BUY MASK',
			  // 'color_RGB': '[12,23,45]',
			  // 'create_date': '2015-11-22T08:01:35.915+00:00',
			  // 'due_date': '2020-11-25T08:01:35.915+00:00',
			  // 'importance': '0',
			  // 'is_main': 'true' 
			// }); 
            // addLine(data).then(weather => {
                // console.log(weather);
            // }).catch(err => {
                // console.error('Error while signIn', err);
            // });
            var data = qs.stringify({
			  'mother_line_id': '60add8d07ce322492421408f',
			  'create_date': '2017-10-22T08:01:35.915+00:00',
			  'due_date': '1939-11-22T08:01:35.915+00:00',
			  'title': 'BUY MASK',
			  'url': 'http://MMM%(&^*&^.com',
			  'content': 'MASK',
			  'is_main': 'true' 
			});
            addNode(data).then(weather => {
                console.log(weather);
            }).catch(err => {
                console.error('Error while signIn', err);
            });
			
            getWeather(city, unit).then(weather => {
                this.setState({
                    ...weather,
                    loading: false
                });
            }).catch(err => {
                console.error('Error getting weather', err);

                this.setState({
                    ...Today.getInitWeatherState(unit),
                    loading: false
                });
            });
        });

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);
    }

    handleFormQuery(city, unit) {
        this.props.onQuery(city, unit);
        this.getWeather(city, unit);
    }
}
