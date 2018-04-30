const app = angular.module("notes");

app.filter("customdate", ["$filter", ($filter) => {
    return (input) => {
        const date = new Date(input);
        const today = new Date();

        if (date.getDay() == today.getDay())
            return $filter('date')(input, "'Today at' hh:mm");
        else if  (date.getDay() == today.getDay() - 1)
            return $filter('date')(input, "'Yesterday at' hh:mm");
        else
            return $filter("date")(input, "dd/MM/yyyy 'at' hh:mm");
    } 
}]);