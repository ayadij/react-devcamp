import React, { Component } from 'react';
import { JournalEntry } from './journal-entry';

const rawJournalData = [
    { title: 'Post 1', content: 'Sample post content here.', status: 'draft' },
    { title: 'Post 2', content: 'Post content here.', status: 'published' },
    { title: 'Post 3', content: 'Sample content placeholder here.', status: 'published' },
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

    clearEntries = () => {
        this.setState({ 
            journalData: [],
            isOpen: false 
        })
    }

    showAllEntries = () => {
        this.setState({ 
            journalData: rawJournalData,
            isOpen: true 
        })
    }

    render() {
        const JournalEntries = this.state.journalData.map(x => {
            return (
                <div key={x.title}>
                    <JournalEntry 
                        title={x.title}
                        content={x.content}
                    />
                </div>
            );
        });


        return (
            <div>
                <h2>{this.props.heading}</h2>
                { JournalEntries }
                <button onClick={this.clearEntries}>Clear Posts</button>
                <button onClick={this.showAllEntries}>Show Posts</button>
            </div>
        );
    }

}
