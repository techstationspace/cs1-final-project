const dotenv = require('dotenv');
dotenv.config();

const Confirm = require('prompt-confirm')
const mongoose = require('mongoose');

const {
    Topic,
    Argument,
    Exercise,
    Lesson,
    CourseTemplate,
    Course,
    Activity } = require('../models/models.js');

(async () => {

    await mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('connected'))
        .catch((err) => console.error(err));

    const confirm = new Confirm('This action will erase and re-initialize the database. Continue?')
        .ask( ( async () => {
            // Drop the database!!!!!!!
            console.log('Dropping database')
            await mongoose.connection.db.dropDatabase();

            console.log('Initialize database...')
            // Generazione Topic
            const topic1 = new Topic({
                title: 'Introduzione HTML',
                description: 'Un introduzione su HTML'
            })
            await topic1.save()

            const topic2 = new Topic({
                title: 'Introduzione CSS',
                description: 'Un introduzione sui CSS'
            })
            await topic2.save()

            const topic3 = new Topic({
                title: 'Introduzione JS',
                description: 'Un introduzione su JavaScript'
            })
            await topic3.save()

            const argument1 = new Argument({
                title: "HTML introduction parte prima",
                description: "un introduzione completa ad HTML",
                difficulty: 4,
                topics: [topic1, topic2],
                resources: ["www.unlink.com/unarisorsa", "www.unaltrolink.it/risorsa"],
            })
            await argument1.save()

            const argument2 = new Argument({
                title: "HTML introduction parte seconda",
                description: "un introduzione completa ad HTML",
                difficulty: 3,
                topics: [topic3],
                resources: ["www.unlink.com/unarisorsadiversa"],
            })
            await argument2.save()

            const exercise1 = new Exercise({
                title: "Un semplice esercizio su HTML",
                description: 'Un primo esercizio semplice',
                difficulty: 2,
                topics: [topic1, topic2, topic3],
                resourses: ["www.unbellink.com/risorsa", "http://unsito.it"],
            })
            await exercise1.save()

            const lesson1 = new Lesson({
                title: 'Introduzione HTML, CSS, JS',
                description: 'Introduzione al markup HTML, CSS e JavaScript',
                slot: 4,
                arguments: [argument1, argument2],
                exercises: [exercise1],
                resources: ["http://unarisorsaextra.it"],
            })
            await lesson1.save()

            const courseTemplate1 = new CourseTemplate({
                title: "Template di un corso",
                description: "Un micro corso di HTML",
                lessons: [lesson1],
            })
            await courseTemplate1.save()

            const course1 = new Course({
                title: "Primo corso estivo di HTML",
                description: "Un micro corso estivo di HTML",
                startDate: new Date(1552261496289),
                duration: 20,
                courseTemplate: courseTemplate1
            })
            await course1.save()

            const activity1 = new Activity({
                lesson: lesson1,
                startDate: new Date(1552261496289),
                coach: "TODO: Il nome di un coach"
            })
            await activity1.save()
            console.log('Done')

            process.exit(0);
        }));

})();
