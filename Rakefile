desc "Generate flat files"
task :generate do
  puts "## Generating site"
  system "rm -rf build"
  system "mkdir build"
  system "./bin/compass compile"
  system "cp -r public/css/ public/js/ public/images/ public/index.html build/"
  cd "build" do
    system "git init"
    system "git remote add github git@github.com:Fraina/BMR-Front-End.git"
  end
end

desc "Push the build to GitHub"
task :push do
  puts "## Deploying build to GitHub Pages"
  cd "build" do
    system "git add ."
    system "git add -u"
    system "git commit -m \"Site updated at #{Time.now.utc}\""
    system "git push github master:gh-pages --force"
  end
end

desc "Generate flat files and deploy to GitHub Pages"
task :deploy => [:generate, :push] do
end
