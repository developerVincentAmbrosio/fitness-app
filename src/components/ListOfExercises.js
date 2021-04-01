import React from 'react';

    const exercises = [
        {
            "id": "1",
            "exercise_type": "chest",
            "exercise_name": "bench press",
            "exercise_desc": "keep arms in line with chest",
            "is_active": "true"
        },
        {
            "id": "2",
            "exercise_type": "chest",
            "exercise_name": "fly",
            "exercise_desc": "keep elbows slightly bent, like you are hugging a barrel",
            "is_active": "true"
        },
        {
            "id": "3",
            "exercise_type": "chest",
            "exercise_name": "incline",
            "exercise_desc": "adjust bench to 45 degrees",
            "is_active": "true"
        },
        {
            "id": "4",
            "exercise_type": "biceps",
            "exercise_name": "curl",
            "exercise_desc": "keep elbows pinned to side",
            "is_active": "true"
        },
        {
            "id": "5",
            "exercise_type": "biceps",
            "exercise_name": "hammer curl",
            "exercise_desc": "keep elbows pinned to side",
            "is_active": "true"
        },
        {
            "id": "6",
            "exercise_type": "biceps",
            "exercise_name": "concentration curl",
            "exercise_desc": "keep elbows pinned to side",
            "is_active": "true"
        },
        {
            "id": "7",
            "exercise_type": "triceps",
            "exercise_name": "French press",
            "exercise_desc": "keep elbows close together",
            "is_active": "true"
        },
        {
            "id": "8",
            "exercise_type": "triceps",
            "exercise_name": "triceps kickback",
            "exercise_desc": "keep elbows close to body and high",
            "is_active": "true"
        },
        {
            "id": "9",
            "exercise_type": "triceps",
            "exercise_name": "skull crusher",
            "exercise_desc": "bend elbows at 90 degrees and do not smash your face",
            "is_active": "true"
        },
        {
            "id": "10",
            "exercise_type": "back",
            "exercise_name": "bent over row",
            "exercise_desc": "keep back straight",
            "is_active": "true"
        },
        {
            "id": "11",
            "exercise_type": "back",
            "exercise_name": "reverse fly",
            "exercise_desc": "keep body still",
            "is_active": "true"
        },
        {
            "id": "12",
            "exercise_type": "shoulder",
            "exercise_name": "shoulder press",
            "exercise_desc": "do not let elblows dip below arm pits",
            "is_active": "true"
        },
        {
            "id": "13",
            "exercise_type": "shoulder",
            "exercise_name": "front lat raise",
            "exercise_desc": "do not lift weight above shoulders",
            "is_active": "true"
        },
        {
            "id": "14",
            "exercise_type": "shoulder",
            "exercise_name": "side lat raise",
            "exercise_desc": "do not lift weight above shoulders",
            "is_active": "true"
        },
        {
            "id": "15",
            "exercise_type": "leg",
            "exercise_name": "squats",
            "exercise_desc": "put weight in heels and clench glutes to take pressure off back",
            "is_active": "true"
        },
        {
            "id": "16",
            "exercise_type": "leg",
            "exercise_name": "lunges",
            "exercise_desc": "make sure knee does not go beyond toes",
            "is_active": "true"
        },
        {
            "id": "17",
            "exercise_type": "leg",
            "exercise_name": "calf raise",
            "exercise_desc": "try to do as slow and controlled as possible",
            "is_active": "true"
        }
    ];

const ListOfExercises = () => {
    return exercises.map(item => {
        return (
            <option key={item.id}>{item.exercise_name}</option>
        )
    })
}

export default ListOfExercises;