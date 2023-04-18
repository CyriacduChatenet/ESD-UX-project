import { Dispatch, SetStateAction } from "react";
import { Label } from "../enum/label.enum";
import { Score } from "../enum/score.enum";

import { Questionnary } from "../types/questionnary.type";

const setComplexityScore = (setScore: Dispatch<SetStateAction<number>>, questionnary: Questionnary) => {
    if (questionnary.region === Label.INTERNATIONAL_ONLY) {
        setScore(prevScore => prevScore += Score.INTERNATIONAL_ONLY);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.multi_package) {
        setScore(prevScore => prevScore += Score.MULTI_PACKAGE);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.expedition_type[0] === Label.COURIER) {
        setScore(prevScore => prevScore += Score.COURIER);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.expedition_type[1] === Label.EXPRESS) {
        setScore(prevScore => prevScore += Score.EXPRESS);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.expedition_type[2] === Label.MESSAGING) {
        setScore(prevScore => prevScore += Score.MESSAGING);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.expedition_type[3] === Label.AFFRER) {
        setScore(prevScore => prevScore += Score.AFFRER);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.expedition_type[4] === Label.MARITIME) {
        setScore(Score.MIN);
        setScore(prevScore => prevScore += Score.MARITIME);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.control === Label.EXCEL) {
        setScore(prevScore => prevScore += Score.EXCEL);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.control === Label.SOFTWARE_AUTO) {
        setScore(prevScore => prevScore += Score.SOFTWARE_AUTO);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }

    if (questionnary.control === Label.NO_CONTROL) {
        setScore(prevScore => prevScore += Score.NO_CONTROL);
    } else {
        setScore(prevScore => prevScore += Score.MIN);
    }
};

export const ScoreService = {
    setComplexityScore,
};