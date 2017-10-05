import { paths, Task } from 'root/core/seed'

console.log(`${paths.yo.coreName} version ${paths.yo.coreVersion}`)

Task.readTasks(paths.tasks.dir.primary)
Task.readTasks(paths.tasks.dir.secondary)

if (paths.yo['unit-test'] !== 'no') {
    Task.readTasks(paths.tasks.dir.test)
}

Task.readTasks(paths.tasks.dir.config)
