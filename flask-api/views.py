from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/make_post', methods=['POST'])
def make_post():
    return 'Done', 201


@api.route('/get_req', methods=['GET'])
def get_req():

    posts = [
        {
            "Title":"Linked List Project",
            "Location":"UMass Amherst",
            "Description":"Data Structures project 7. Implement Linked List from scratch in Java.",
            "User":"John Doe",
            "Tags": 'CS, Linked Lists, Data Structures, Project'
        },
        {
            "Title":"Macroeconomics Exam Study Group",
            "Location":"Boston University",
            "Description":"Introduction to Macroeconomics Midterm. We will study 2-3 nights this week before the exam.",
            "User":"John Woah",
            "Tags": 'Economics, Exam, Study, Macro'
        },
        {
            "Title":"College Writing Peer Review",
            "Location":"UMass Amherst",
            "Description":"College Writing second essay on persuasive writing. Looking for a partner/s to peer review and edit our rough drafts. College Writing second essay on persuasive writing. College Writing second essay on persuasive writing. College Writing second essay on persuasive writing.",
            "User":"John No",
            "Tags": 'English, Writing, Essay, Review'
        }
    ]

    return jsonify(posts)
