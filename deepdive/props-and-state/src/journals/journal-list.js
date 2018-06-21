import React, { Component } from 'react';


const rawJournalData = [
    { title: 'Post 1', content: 'Post content here.', status: 'draft' },
    { title: 'Post 2', content: 'Post content here.', status: 'published' },
    { title: 'Post 3', content: 'Post content here.', status: 'published' },
    { title: 'Post 4', content: 'Post content here.', status: 'published' },    
];

export default class JournalList extends Component {
    constructor(props){
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'testing...',
            isOpen: true
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
            </div>
        );
    }

}
