# encoding: utf-8

namespace :doc do
  namespace :diagram do
    FileUtils.mkdir(Rails.root.join('doc')) unless File.exists?(Rails.root.join('doc'))
    
    task :models do
      `railroad -i -l -a -m -M | dot -Tsvg | sed 's/font-size:14.00/font-size:11.00/g' > doc/models.svg`
    end
    
    task :models_brief do
      `railroad -i -l -a -b -M | dot -Tsvg | sed 's/font-size:14.00/font-size:11.00/g' > doc/models_brief.svg`
    end
    
    task :models_full do
      `railroad -i -l -a -m -p -M | dot -Tsvg | sed 's/font-size:14.00/font-size:11.00/g' > doc/models_full.svg`
    end
    
    task :controllers do
      `railroad -i -l -C | neato -Tsvg | sed 's/font-size:14.00/font-size:11.00/g' > doc/controllers.svg`
    end
    
    task :controllers_brief do
      `railroad -i -l -b -C | neato -Tsvg | sed 's/font-size:14.00/font-size:11.00/g' > doc/controllers_brief.svg`
    end
  end
  
  task :diagrams => %w(diagram:models diagram:controllers)
end