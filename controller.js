const fs = require("fs");

exports.queryRecords = function(req, res) {
  const name = req.query.name;
  const maker = req.query.maker;
  const data = JSON.parse(fs.readFileSync("./sakes.json"));

  let result;
  //handle name query
  if (name !== undefined) {
    const newArray = [];
    data.map(obj => {
      if (obj.name_en === name) {
        newArray.push(obj);
      }
    });
    result = newArray;
    //handle maker query
  } else if (maker !== undefined) {
    const newArray = [];
    data.map(obj => {
      if (obj.maker_ja === maker) {
        newArray.push(obj);
      }
    });
    result = newArray;
  } else {
    result = data;
  }
  //if name and maker are not given, return all data
  res.send(result);
};

exports.createRecord = function(req, res) {
  const data = JSON.parse(fs.readFileSync("./sakes.json"));
  const newData = [...data, req.body];
  fs.writeFileSync("sakes.json", JSON.stringify(newData));
  res.json(req.body);
};

exports.updateRecord = function(req, res) {
  //doSomething!
};

exports.deleteRecord = function(req, res) {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(path));
  const newData = data.filter(obj => obj.id !== id);
  const deletedData = data.filter(obj => obj.id === id);
  fs.writeFileSync("sakes.json", JSON.stringify(newData));
  res.json(deletedData);
};
